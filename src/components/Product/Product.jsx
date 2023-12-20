import { Container } from "@mui/material";
import "./product.css";

import { Box } from "@mui/material";
export const Product = () => {
  return (
    <Container>
      <Box>
        <div className="box">
          <div className="Image-box">
            <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
          </div>
        </div>
      </Box>
    </Container>
  );
};
