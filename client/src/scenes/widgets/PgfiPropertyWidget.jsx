import {
  // EditOutlined,
  // DeleteOutlined,
  // AttachFileOutlined,
  // GifBoxOutlined,
  // ImageOutlined,
  // MicOutlined,
  // MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  //Typography,
  //InputBase,
  useTheme,
  //Button,
  //IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
//
import PropertyCard from "components/common/PropertyCard";

//
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import allProperties  from "../../data/properties";

const PgfiPropertyWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  //const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const subsidiary = useSelector((state) => state.user.subsidiary);
  //const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  //const mediumMain = palette.neutral.mediumMain;
  //const medium = palette.neutral.medium;
  //
  let filturedProps;
  if(subsidiary === "PGFI"){
    filturedProps = (allProperties.filter(property => (property.subsidiary !== "Hotel" && property.subsidiary !== "Hotel-All" ) ));
    //filturedProps = (allProperties.filter(property => (property.subsidiary === "Hospital" ) ));
  }else{
    filturedProps = allProperties.filter(property => property.subsidiary === subsidiary );
  }
  console.log(filturedProps)

  

  
  
  const displayOtherProperties =  ()=>{
    if (filturedProps.length === 0){
      return <h1>No Property is available for this user</h1>
    }else{
      return filturedProps?.map((property) => (
        <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
        />
    ))
    }
  }

  return (
    <WidgetWrapper>
      PGFI Property widget
      <FlexBetween gap="1.5rem">
        <Box mt="20px" sx={{ display: "flex", justifyContent: 'space-evenly', flexWrap: "wrap", gap: 3 }}>
            {displayOtherProperties()}
        </Box>
      </FlexBetween>
      <Divider sx={{ margin: "1.25rem 0" }} />
    </WidgetWrapper>

  );
};

export default PgfiPropertyWidget;