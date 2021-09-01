import { Header, Container, Checkout } from "./style";
// Providers
import { useForm } from "react-hook-form";
// Components
import { Contact } from "./components/contact";
import { Items } from "./components/items";

function App() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const saveData = () => {
    console.log(getValues());
    alert("Successful purchase");
    window.location.reload();
  };

  return (
    <div className="App">
      <Container>
        <Header>Checkout</Header>
        <Checkout>
          <Contact
            saveData={saveData}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
          <Items />
        </Checkout>
      </Container>
    </div>
  );
}

export default App;
