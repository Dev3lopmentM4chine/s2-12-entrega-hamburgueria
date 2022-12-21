import { StyledInputSearch } from "./style";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";

interface IsubmitProp{
  inputText: string;
}

export const InputSearch = () => {
  const { setFilteredProducts } = useContext(CardContext)

  const { register, handleSubmit, formState: reset } = useForm<IsubmitProp>();

  const submit: SubmitHandler<IsubmitProp> = (data) => {
    setFilteredProducts(data.inputText)
  }

  return (
    <>
      <StyledInputSearch
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <input
          id="inputText"
          type="text"
          placeholder="Digitar Pesquisa"
          {...register("inputText")}
        />

        <Button children={"Pesquisar"} type="submit" />
      </StyledInputSearch>
    </>
  );
};
