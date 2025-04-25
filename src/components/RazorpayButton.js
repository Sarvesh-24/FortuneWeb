import React, { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_QNG8nUGgPOEyzj');
    script.async = true;

    const form = document.getElementById('razorpay-form');
    form.appendChild(script);

    return () => {
      // Cleanup script if needed
      form.removeChild(script);
    };
  }, []);

  return (
    <form id="razorpay-form"></form>
  );
};

export default RazorpayButton;
