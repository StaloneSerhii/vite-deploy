import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/operations";
const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.user);

  const logOutBtn = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <ul>
        <li>
          <p>Email</p>
          <p>{state.email}</p>
          <Button
            variant="contained"
            type="button"
            onClick={logOutBtn}
            sx={{
              backgroundColor: "#FFC700",
              borderRadius: "4px",
              mt: "20px",
              padding: "10px",
            }}
          >
            Вийти
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default Main;
