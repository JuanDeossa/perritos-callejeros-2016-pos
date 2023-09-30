import Image from "next/image";
import React from "react";
import './factura.css'
export const Factura1 = () => {
  return (
    <div className="pos-receipt-container">
      <div className="pos-receipt">
        <Image className="pos-receipt-logo" alt="Logo" src="" />
        <br />
        <div className="pos-receipt-contact">
          <div>perritosCallejeros2016</div>
          <div>juandeossa.nc@gmail.com</div>
          <div className="cashier">
            <div>--------------------------------</div>
            <div>Servido por juan deossa</div>
          </div>
        </div>
        <br />
        <br />
        <div className="orderlines">
          <div className="responsive-price">
            pepsi 1.5L
            <span className="price_display pos-receipt-right-align">1,19</span>
          </div>
          <span></span>
        </div>
        <div className="pos-receipt-right-align">--------</div>
        <br />
        <div className="pos-receipt-amount">
          {" "}
          TOTAL <span className="pos-receipt-right-align">$&nbsp;1,19</span>
        </div>
        <br />
        <br />
        <div>
          Banco<span className="pos-receipt-right-align">1,19</span>
        </div>
        <br />
        <div className="pos-receipt-amount receipt-change">
          {" "}
          CAMBIO <span className="pos-receipt-right-align">$&nbsp;0,00</span>
        </div>
        <br />
        <div>
          19%<span className="pos-receipt-right-align">0,19</span>
        </div>
        <div id="post_receipt_taxes_container">
          {" "}
          Total de Impuestos{" "}
          <span className="pos-receipt-right-align">$&nbsp;0,19</span>
        </div>
        <div className="before-footer"></div>
        <div className="after-footer"></div>
        <br />
        <br />
        <div className="pos-receipt-order-data">
          <div>Pedido 00002-002-0003</div>
          <div>30/09/2023 01:30:00</div>
        </div>
      </div>
    </div>
  );
};
