import { cloudinaryUploader } from "../utils/cloudinary.js";
import fs from "fs";

export const universalFileUpload = async (request, response) => {
    try {
        if (!request.file) {
            throw new Error("No file uploaded");
        }

        console.log("Uploaded file:", request.file);

        // Upload the file to Cloudinary
        const uploadResult = await cloudinaryUploader.upload(request.file.path, {
            resource_type: "auto", // Automatically detect the file type
        });

        console.log("Cloudinary upload result:", uploadResult);

        // Delete the temporary file
        fs.unlinkSync(request.file.path);

        // Prepare the response
        response.json({
            data: {
                url: uploadResult.secure_url,
                name: uploadResult.original_filename,
                format: uploadResult.format,
                resource_type: uploadResult.resource_type,
                size: uploadResult.bytes,
            },
            status: true,
            message: "File uploaded successfully!"
        });
    } catch (error) {
        console.error("File upload error:", error);

        // If a file was uploaded but an error occurred, try to delete the temporary file
        if (request.file && request.file.path) {
            try {
                fs.unlinkSync(request.file.path);
            } catch (unlinkError) {
                console.error("Error deleting temporary file:", unlinkError);
            }
        }

        response.status(500).json({
            data: null,
            status: false,
            message: error.message,
        });
    }
};