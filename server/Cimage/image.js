import File from "../model/file.js";

export const uploadImage = async (request, response) => {
    // return response.status(200).json({msg: 'Hello'})
    // console.log(request);
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
    try{
        const file = await File.create(fileObj);
        response.status(200).json({path: `http://localhost8000/file/${file._id}`})
    } catch(error){
        console.error("error is : ", error.message);
        response.status(500).json({error: error.message})
    }
}

export const downloadImage = async (request, response) => {
    try{
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        await file.save();
        response.download(file.path, file.name);
    } catch(error){
        console.error("error:", error.message);
        return response.status(500).json({error: error.message});
    }
}