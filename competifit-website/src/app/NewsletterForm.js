import { useState } from 'react';


const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ?  formattedMessage : null;
  }

  return (
    <div className='flex flex-col flex-wrap pb-20'>
      <div className="text-wrap">
      <h3 className="mb-1 text-wrap text-white pt-10 w-full lg:w-9/10 text-center p-1">Sign Up To Our Waitlist Below!</h3>
      </div>
      

      <div className="flex flex-col m:flex-row newsletter-input-fields pt-2 px-0.5">
        <div className="mc-field-group text-white">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your Email"
            className="required email text-black rounded-l rounded-r border border-gray-400 h-full pl-3 p-1 mx-0.5"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap pl-2">
        <button class="nes-btn is-Primary" onClick={handleFormSubmit}>
        Submit
        </button>
      </div>


      </div>
      <div className="min-h-42px">
        { 'sending' === status ? null : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-white pt-2" dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </div>
  );
}

export default NewsletterForm