import School from "../models/School.js";
import Joi from "joi";

const schoolSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required(),
});

export const addSchool = async (req, res) => {
  try {
    const { error } = schoolSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, address, latitude, longitude } = req.body;
    const school = new School({
      name,
      address,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });

    await school.save();

    res
      .status(201)
      .json({ message: "School added successfully", id: school._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required" });
    }

    const schools = await School.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          spherical: true,
          distanceMultiplier: 0.001, // Convert distance to kilometers
        },
      },
    ]);

    res.json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
