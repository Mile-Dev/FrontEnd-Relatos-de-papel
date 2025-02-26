import React from "react";
import InputMask from "react-input-mask";

const PaymentDataForm = ({ paymentData, onChange }) => {
  return (
    <div>
      <h4>Datos de Pago</h4>
      <div className="mb-3">
        <label className="form-label">Número de Tarjeta:</label>
        <InputMask
          mask="9999 9999 9999 9999"
          value={paymentData.cardNumber}
          onChange={onChange}
          placeholder="1234 5678 9012 3456"
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="text"
              name="cardNumber"
              className="form-control"
              required
            />
          )}
        </InputMask>
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha de Expiración:</label>
        <InputMask
          mask="99/99"
          value={paymentData.expiration}
          onChange={onChange}
          placeholder="MM/AA"
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="text"
              name="expiration"
              className="form-control"
              required
            />
          )}
        </InputMask>
      </div>
      <div className="mb-3">
        <label className="form-label">CVV:</label>
        <InputMask
          mask="999"
          value={paymentData.cvv}
          onChange={onChange}
          placeholder="123"
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="text"
              name="cvv"
              className="form-control"
              required
            />
          )}
        </InputMask>
      </div>
    </div>
  );
};

export default PaymentDataForm;
