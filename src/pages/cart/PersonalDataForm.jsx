import React, { useState, useEffect } from "react";

const PersonalDataForm = ({ personalData, onChange, onValidityChange }) => {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(value)) {
        error = "Por favor, ingresa un correo electrónico válido.";
      }
    }
    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(value)) {
        error = "El número de teléfono debe contener exactamente 10 dígitos.";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };


  const validateForm = () => {
    const isValid =
      personalData.name.trim() !== "" &&
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(personalData.email) &&
      /^[0-9]{10}$/.test(personalData.phone);
    setIsFormValid(isValid);
    onValidityChange(isValid);
  };


  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };


  useEffect(() => {
    validateForm();
  }, [personalData]);

  return (
    <div>
      <h4>Datos Personales</h4>
      <div className="mb-3">
        <label className="form-label">Nombre Completo:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={personalData.name}
          onChange={onChange}
          placeholder="Ingresa tu nombre"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={personalData.email}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder="ejemplo@correo.com"
          required
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono:</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          value={personalData.phone}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder="1234567890"
          required
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
      </div>
    </div>
  );
};

export default PersonalDataForm;
