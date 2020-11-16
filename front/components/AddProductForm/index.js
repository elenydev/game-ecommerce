import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { FormLabel, Button, Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "../../components/Alert/index.js";
import useAlert from "../../hooks/useAlert";

const Form = styled.form`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }

  & > .MuiFormLabel-root {
    color: white;
  }

  & > .hidden {
    display: none;
  }

  & > label > .MuiIconButton-colorPrimary {
    color: #ff3600bf !important;
  }

  & > .MuiInputBase-root {
    color: white !important;

    &::placeholder {
      color: white !important;
    }
  }
`;

const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;

  & > a {
    cursor: pointer;
  }
`;

const Header = styled.h2`
  display: flex;
  font-weight: 700;
  width: 100%;
  padding: 10px;
  justify-content: center;
  color: rgb(255 90 90 /60%);
`;

const InputElement = styled(Input)`
  margin: 8px 0;
  color: white;

  & > .MuiInputBase-input {
    color: white;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > .MuiFormLabel-root {
    margin: 10px 0;
    color: rgba(255, 255, 255, 0.5);

    & > p {
      margin: 5px 0;
    }
  }

  & > label > .MuiInputBase-root {
    color: #ff3600bf !important;
  }
`;

const defaultValues = {
  productName: null,
  productDescription: null,
  gameType: "Wargame",
  prize: null,
  availableAmount: null,
  productImage: null,
  device: "Desktop",
};

const AddProductForm = () => {
  const { register, handleSubmit, errors, setError, reset, control } = useForm({
    defaultValues,
  });

  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();
  const [gameType, setGameType] = useState("Wargame");
  const [device, setDevice] = useState("Desktop");

  const handleChangeGameType = (event) => {
    setGameType(event.target.value);
  };

  const handleChangeDevice = (event) => {
    setDevice(e.target.value);
  };

  const registerProduct = async (data, event) => {
    event.preventDefault();
    const {
      productName,
      productDescription,
      gameType,
      prize,
      availableAmount,
      productImg,
      device,
    } = data;

    const product = new FormData();
    product.append("productName", productName);
    product.append("productDescription", productDescription);
    product.append("gameType", gameType);
    product.append("prize", prize);
    product.append("availableAmount", availableAmount);
    product.append("productImg", productImg[0]);
    product.append("device", device);

    try {
      const send = await fetch("http://localhost:8080/addProduct", {
        method: "POST",
        body: product,
      });
      const response = await send.json();
      if (response) {
        if (response.product) {
          setVariant("success");
          setMessage("Product added");
          reset();
          return;
        } else {
          setVariant("error");
          setMessage("Product already exist");
          return;
        }
      }
      setErrorAlert();
    } catch (err) {
      setErrorAlert();
    }
  };

  useEffect(() => {
    clearMessage();
  }, [message]);

  return (
    <div>
      <Header>Add product</Header>
      <Form onSubmit={handleSubmit(registerProduct)} encType="">
        <FormLabel>
          <InputElement
            type="text"
            name="productName"
            placeholder="Product Name"
            inputRef={register({ required: true })}
            onChange={() => {
              setError("productName", {
                type: "manual",
                message: "You have to provide a product name",
              });
            }}
          />
        </FormLabel>
        {errors.productName && errors.productName.type === "required" && (
          <ErrorSpan>Please provide a product name</ErrorSpan>
        )}

        <FormLabel>
          <InputElement
            type="text"
            name="productDescription"
            placeholder="Product Description"
            inputRef={register({ required: true })}
            onChange={() => {
              setError("productDescription", {
                type: "manual",
                message: "You have to provide a product description",
              });
            }}
          />
        </FormLabel>
        {errors.productDescription &&
          errors.productDescription.type === "required" && (
            <ErrorSpan>Please provide a product description</ErrorSpan>
          )}

        <SelectBox>
          <FormLabel>
            <p>Select game type</p>
            <Controller
              as={
                <Select value={gameType} onChange={handleChangeGameType}>
                  <MenuItem value="Wargame">Wargame</MenuItem>
                  <MenuItem value="Racing">Racing</MenuItem>
                  <MenuItem value="MMO">MMO</MenuItem>
                  <MenuItem value="RPG">RPG</MenuItem>
                  <MenuItem value="RP">RP</MenuItem>
                  <MenuItem value="Simulation">Simulation</MenuItem>
                  <MenuItem value="Strategy">Strategy</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Survival">Survival</MenuItem>
                  <MenuItem value="Battle Royale">Battle Royale</MenuItem>
                </Select>
              }
              name="gameType"
              rules={{ required: true }}
              control={control}
            />
          </FormLabel>
        </SelectBox>
        {errors.gameType && errors.gameType.type === "required" && (
          <ErrorSpan>Please provide a game type</ErrorSpan>
        )}

        <FormLabel>
          <InputElement
            type="number"
            name="prize"
            placeholder="Enter prize"
            inputRef={register({ required: true, min: 1 })}
            onChange={() => {
              setError("prize", {
                type: "manual",
                message: "You have to provide a prize",
              });
            }}
          />
        </FormLabel>
        {errors.prize && errors.prize.type === "required" && (
          <ErrorSpan>Please provide a prize</ErrorSpan>
        )}

        <FormLabel>
          <InputElement
            type="number"
            name="availableAmount"
            placeholder="Enter amount of products "
            inputRef={register({ required: true, min: 1 })}
            onChange={() => {
              setError("availableAmount", {
                type: "availableAmount",
                message: "You have to provide amount of products",
              });
            }}
          />
        </FormLabel>
        {errors.availableAmount &&
          errors.availableAmount.type === "required" && (
            <ErrorSpan>Please provide a amount of products</ErrorSpan>
          )}

        <input
          ref={register({ required: true })}
          name="productImg"
          type="file"
          accept=".png, .jpg, .jpeg"
          id="productImg"
          className="hidden"
          onChange={(e) => {
            setError("productImg", {
              type: "manual",
              message: "You have to provide an product image",
            });
          }}
        />
        <label htmlFor="productImg">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        {errors.productImg && errors.productImg.type === "required" && (
          <ErrorSpan>Please provide a product image</ErrorSpan>
        )}
        <SelectBox>
          <FormLabel>
            <p>Select device</p>
            <Controller
              as={
                <Select value={device} onChange={handleChangeDevice}>
                  <MenuItem value="Desktop">Desktop</MenuItem>
                  <MenuItem value="Playstation">Playstation</MenuItem>
                  <MenuItem value="Xbox">Xbox</MenuItem>
                </Select>
              }
              name="device"
              rules={{ required: true }}
              control={control}
            />
          </FormLabel>
        </SelectBox>
        {errors.device && errors.device.type === "required" && (
          <ErrorSpan>Please provide a device</ErrorSpan>
        )}

        <Button type="submit" variant="contained" color="secondary">
          Add Product
        </Button>
      </Form>
      {message && (
        <Alert message={message} variant={variant} shouldOpen={true} />
      )}
    </div>
  );
};

export default AddProductForm;
