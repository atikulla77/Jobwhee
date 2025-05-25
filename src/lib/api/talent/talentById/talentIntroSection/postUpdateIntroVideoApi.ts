import {$fetch} from '@/$api/fetch.api';

export interface UpdateVideoData {
    image?: File;
    embedUrl?: string;
    videoStatus: 'Direct' | 'Embed';
}

// export const updateTalentVideo = async (
//     videoData: UpdateVideoData
// ): Promise<void> => {
//     try {
//         return await $fetch.patch('/user/talent/video', true, videoData);
//     } catch (patchError) {
//         console.error('Error in Talent Video update request:', patchError);
//         throw patchError;
//     }
// };
export const updateTalentVideo = async (
    videoData: UpdateVideoData
): Promise<void> => {
    try {
        // If it's a file upload (Direct)
        if (videoData.videoStatus === 'Direct' && videoData.image) {
            const formData = new FormData();
            formData.append('image', videoData.image);
            formData.append('videoStatus', videoData.videoStatus);

            return await $fetch.patch('/user/talent/video', true, formData);
        }

        // If it's an  URL (Embed)
        if (videoData.videoStatus === 'Embed' && videoData.embedUrl) {
            return await $fetch.patch('/user/talent/video', true, {
                embedUrl: videoData.embedUrl,
                videoStatus: 'Embed',
            });
        }

        throw new Error('Invalid video data');
    } catch (patchError) {
        console.error('Error in Talent Video update request:', patchError);
        throw patchError;
    }
};

export interface UpdateVideoStatus {
    videoStatus: 'Direct' | 'Embed' | "Hidden";
}


export const updateTalentVideoStatus = async (
    payload: UpdateVideoStatus
): Promise<void> => {
    try {
        return await $fetch.patch(`/user/talent/video/status`, true, payload);
    } catch (patchError) {
        console.error('Error in Talent Video status update  request:', patchError);
        throw patchError;
    }
};

