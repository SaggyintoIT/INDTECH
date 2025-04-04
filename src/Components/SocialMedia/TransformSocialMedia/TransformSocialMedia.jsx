import React from "react";
import newsFeedImg from "../../../assets/images/socialmedia_7.svg";
import filtersImg from "../../../assets/images/socialmedia_8.svg";
import storyImg from "../../../assets/images/socialmedia_9.svg";
import chatImg from "../../../assets/images/socialmedia_10.svg";
import voiceRecordingImg from "../../../assets/images/socialmedia_11.svg";
import mediaUploadImg from "../../../assets/images/socialmedia_12.svg";
import notificationsImg from "../../../assets/images/socialmedia_13.svg";
import editingImg from "../../../assets/images/socialmedia_14.svg";
import liveStreamingImg from "../../../assets/images/socialmedia_15.svg";

const features = [
  {
    img: newsFeedImg,
    title: "News Feed",
    description:
      "Stay updated with the latest news using the news feed feature.",
  },
  {
    img: filtersImg,
    title: "Filters and Emojis",
    description:
      "Enhance the fun with filters, stickers, emojis, and theme stickers.",
  },
  {
    img: storyImg,
    title: "Story Sharing",
    description:
      "Share your daily special moments on your profile, visible for the next 24 hours.",
  },
  {
    img: chatImg,
    title: "Real-time Chat",
    description:
      "Engage in real-time conversations and interactions with others.",
  },
  {
    img: voiceRecordingImg,
    title: "Voice Recording",
    description:
      "Send voice notes instead of messages, similar to apps like WhatsApp.",
  },
  {
    img: mediaUploadImg,
    title: "Media Upload & Sharing",
    description: "Easily share and upload media with friends and family.",
  },
  {
    img: notificationsImg,
    title: "Push Notifications",
    description:
      "Receive activity notifications to stay informed about your friends' activities on social media.",
  },
  {
    img: editingImg,
    title: "Image and Content Editing",
    description:
      "Edit images and content seamlessly on your social media account.",
  },
  {
    img: liveStreamingImg,
    title: "Live Streaming",
    description:
      "Share your favorite moments instantly by going live with a single click.",
  },
];

const TransformSocialMediaApp = () => {
  return (
    <section className="lightgraybg bodypx py-80" id="">
      <div className="container text-center">
        <div className="col-md-12 mb-4">
          <h2 className="font-40">
            Transform your Social Media App <br /> With Cutting-Edge Features
            and Functionalities
          </h2>
          <p className="font-18 my-3">
            Elevate your social networking app development with the latest
            features, enhancing your brand's global presence.
          </p>
        </div>
      </div>
      <div className="container-fluid mi-container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="bg-white padding30 rounded16 h-100 text-center">
                <img
                  className="d-block"
                  src={feature.img}
                  alt={feature.title}
                />
                <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                  {feature.title}
                </span>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSocialMediaApp;
