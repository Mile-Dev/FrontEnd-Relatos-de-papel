import React from "react";
import Swal from "sweetalert2";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  StepIconProps,
} from "@mui/material";
import { ShoppingCart, Person, Payment, CheckCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PersonalDataForm from "../PersonalDataForm";
import PaymentDataForm from "../PaymentDataForm";
import Cart from "../../../components/Cart";
import "./StepForm.css";

const StepIcon = (props: StepIconProps) => {
  const { active, completed, icon } = props;

  const icons = {
    1: <ShoppingCart />,
    2: <Person />,
    3: <Payment />,
    4: <CheckCircle />,
  };

  return (
    <div
      style={{
        color: completed ? "#4caf50" : active ? "#1976d2" : "#bdbdbd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      {icons[icon]}
    </div>
  );
};

const StepForm = ({ cart, onIncrement, onDecrement, onRemove, setCart }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [personalData, setPersonalData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentData, setPaymentData] = React.useState({
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const [isPersonalDataValid, setIsPersonalDataValid] = React.useState(false);
  const steps = ["Carrito", "Datos Personales", "Pago", "Confirmación"];
  const navigate = useNavigate();

  const validateStep = () => {
    if (activeStep === 1) {
      return personalData.name && personalData.email && personalData.phone;
    }
    if (activeStep === 2) {
      return paymentData.cardNumber && paymentData.expiration && paymentData.cvv;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos obligatorios.",
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleConfirmPayment = () => {
    Swal.fire({
      icon: "success",
      title: "¡Pago realizado con éxito!",
      text: "Gracias por tu compra. Te enviaremos los detalles por correo.",
    }).then(() => {
      setCart([]);
      navigate("/books");
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Cart
            cart={cart}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        );
      case 1:
        return (
          <PersonalDataForm
            personalData={personalData}
            onChange={(e) =>
              setPersonalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            onValidityChange={setIsPersonalDataValid}
          />
        );
      case 2:
        return (
          <PaymentDataForm
            paymentData={paymentData}
            onChange={(e) =>
              setPaymentData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        );
      case 3:
        return (
          <div className="confirmation">
            <h3>Confirmación del Pedido</h3>
            <h5 className="section-title">
              <b>Resumen del Carrito</b>
            </h5>
            <ul className="cart-summary">
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} x {item.quantity} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <h5 className="total">
              Total: <b>${calculateTotal()}</b>
            </h5>
            <h5 className="section-title">
              <b>Datos Personales</b>
            </h5>
            <p>Nombre: {personalData.name}</p>
            <p>Correo Electrónico: {personalData.email}</p>
            <p>Teléfono: {personalData.phone}</p>
            <h5 className="section-title">
              <b>Detalles de Pago</b>
            </h5  >
            <p>Número de Tarjeta: **** **** **** {paymentData.cardNumber.slice(-4)}</p>
            <p>Expiración: {paymentData.expiration}</p>
          </div>

        );
      default:
        return null
    }
  };

  return (
    <div className="step-form-wrapper">
      <div className="step-form-card">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="step-form-content">{renderStepContent()}</div>
        <div className="step-form-buttons">
          {activeStep > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Anterior
            </Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === 1 && !isPersonalDataValid}>
              Siguiente
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={handleConfirmPayment}>
              Confirmar y Pagar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepForm;
