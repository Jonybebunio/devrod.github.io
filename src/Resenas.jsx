
import React from 'react';

const Resena = () => {
  // Pega el código HTML de la reseña aquí
  const reviewHTML = '<div class="review">.</div>'; // Pega el código HTML de la reseña aquí

  return (
    <div className="google-review" dangerouslySetInnerHTML={{ __html: reviewHTML }} />
  );
};

export default Resena;