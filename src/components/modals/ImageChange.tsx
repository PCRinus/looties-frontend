import { ReduxEvents } from "../../reducers/events";
import axios from "axios";
import { ReactComponent as Close } from "../../assets/Close.svg";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import userIcon from "../../assets/UserIcon.svg";

const ImageChange = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const auth = useSelector((state: any) => state.auth);
    const [images, setImages] = useState<any>([]);
    const profile = useSelector((state: any) => state.user.profile);
    const [profilePic, setProfilePic] = useState<any>(null);

    const allowedExtensions = ["jpeg", "jpg", "png"];

    useEffect(() => {
        setProfilePic(user.profile.avatarUrl);
    }, [user.profile.avatarUrl]);

    const onChange = (imageList: ImageListType) => {
        setImages(imageList as never[]);
    };

    const savePicture = () => {
        if (user.id) {
            if (images.length > 0) {
                const formData = new FormData();
                formData.append("media", images[0].file);
                axios
                    .post(
                        `${process.env.REACT_APP_API_URL}/${user.id}/avatar`, formData,
                        {
                            headers: {
                                Authorization: `Bearer ${auth.jwt}`,
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    )
                    .then(
                        (response) => {
                            if (response.data === "File type is not supported!") {
                                return toast.error(response.data);
                            }

                            dispatch({
                                type: ReduxEvents.ChangeProfilePic,
                                payload: { profilePic: response.data },
                            });
                            dispatch({ type: ReduxEvents.CloseModal });

                            setProfilePic(response.data);
                            setImages([]); // Clear the image list

                            return toast.success("Picture successfully changed");
                        },
                        (error) => {
                            if (error.response.data.message) {
                                return toast.error(error.response.data.message);
                            }
                        }
                    );
            } else {
                return toast.error("Select an accepted image file!");
            }
        } else {
            toast.error("You are not logged in!");
        }
    };

    return (
        <div className="flex--column autoheight modal--content w-[100vw] md:w-[837px]" style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }} onClick={(e) => e.stopPropagation()}>
            <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                <div className="mx-auto flex items-center gap-2 pl-[30px]">
                    <span className="text-2xl font-bold">Edit your avatar</span>
                </div>
                <div className="close close--unset" onClick={() => { dispatch({ type: ReduxEvents.CloseModal }); }}>
                    <Close />
                </div>
            </div>
            <div className={`noscroll h-[70%] flex flex-col overflow-y-auto justify-center px-[32px] items-center text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px] md:h-[325px] md:max-h-[500px]`}>
                <div className="flex flex-col items-center min-w-[155px] justify-center gap-4 h-full">
                    <div className="flex flex-row justify-center items-center gap-2 h-full">
                        <ImageUploading
                            value={images}
                            onChange={onChange}
                            maxNumber={1}
                            acceptType={allowedExtensions}
                        >
                            {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                <div className="flex flex-col gap-4 justify-center items-center h-full">
                                    <div className="flex flex-row h-full">
                                        <div className="flex justify-center items-center" style={isDragging ? { color: "red" } : undefined} {...dragProps}>
                                            <div className="">
                                                {profilePic ? (
                                                    <img
                                                        className="object-cover rounded-xl w-[120px] h-[120px]"
                                                        src={imageList.length > 0 ? imageList[0].dataURL : profilePic}
                                                        alt="profile"
                                                        onError={(e) => {
                                                            e.currentTarget.src = `${userIcon}`;
                                                        }}
                                                    />
                                                ) : (
                                                    <img
                                                        className="object-cover rounded-xl w-[120px] h-[120px]"
                                                        src={imageList.length > 0 ? imageList[0].dataURL : userIcon}
                                                        alt="profile"
                                                        onError={(e) => {
                                                            e.currentTarget.src = `${userIcon}`;
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 h-full justify-start items-center">
                                        <span>Files supported as images are PNG, JPEG, and JPG</span>
                                        {imageList.length === 0 ? (
                                            <button
                                                className="flex h-[44.54px] w-[200px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
                                                onClick={onImageUpload}
                                            >
                                                Change profile picture
                                            </button>
                                        ) : (
                                            <div className="flex flex-row justify-center items-center gap-2">
                                                <button
                                                className="flex h-[44.54px] w-[200px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
                                                onClick={() => onImageUpdate(0)}
                                            >
                                                Update
                                                </button>
                                                <button
                                                    className="flex h-[44.54px] w-[200px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
                                                    onClick={() => onImageRemove(0)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-[77px] h-[77px] w-full bg-gradient-to-b from-transparent to-[#151719]"></div>

            <div className="footer mt-auto flex flex-row items-center justify-center gap-5 rounded-b-[12px] border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                <button
                    className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white"
                    onClick={() => {
                        dispatch({ type: ReduxEvents.CloseModal });
                    }}
                >
                    Cancel
                </button>
                <button
                    className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
                    onClick={savePicture}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export { ImageChange };





