// CanoteList.js
import "./CanoteList.css";
import Canote from "./Canote";
import img1 from "./img/medCanote.png";
import img11 from "./img/hand.png";
const canoteData = [
  {
    imageUrl: { img1 },
    title: "Category Title 1",
    profileImageUrl: { img11 },
    ProfileName: "Person Name 1",
    percentage: 50,
  },
  {
    imageUrl: "image-url-2",
    title: "Category Title 2",
    profileImageUrl: "avatar-icon-url-2",
    ProfileName: "Person Name 2",
    percentage: 10,
  },
  {
    imageUrl: "image-url-3",
    title: "Category Title 3",
    profileImageUrl: "avatar-icon-url-3",
    ProfileName: "Person Name 3",
    percentage: 77,
  },
  {
    imageUrl: "image-url-4",
    title: "Category Title 4",
    profileImageUrl: "avatar-icon-url-4",
    ProfileName: "Person Name 4",
    percentage: 25,
  },
  {
    imageUrl: "image-url-5",
    title: "Category Title 5",
    profileImageUrl: "avatar-icon-url-5",
    ProfileName: "Person Name 5",
    percentage: 77,
  },
  {
    imageUrl: "image-url-6",
    title: "Category Title 6",
    profileImageUrl: "avatar-icon-url-6",
    ProfileName: "Person Name 6",
    percentage: 77,
  },
  // Add more Canote data here
];

const CanoteList = () => {
  return (
    <div className="canote-list">
      {canoteData.map((canote, index) => (
        <Canote key={index} {...canote} />
      ))}
    </div>
  );
};

export default CanoteList;
