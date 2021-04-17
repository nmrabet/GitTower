import Index from "../SocialIcons";
import '../ActionSection/ActionSection.css';

export default function SocialIcons(props) {
  const { img, objectPosition, color } = props;

  return (
    <div
      style={{
        position: "relative",
        height: "50%",
        width: "100%",
        backgroundImage: `url(${img})`,
      }}
    >
      <img className='img'
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
        }}
        alt="desk"
        src={img}
      />

      <Index color={color} />
    </div>
  );
}
