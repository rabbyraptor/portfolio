<template>
  <div class="contact-wrapper">
    <div class="contact-intro">
      <h3>Send mig en besked!</h3>
      <p>Har du noget på hjerte? Kom i kontakt med mig ved at udfylde formularen herunder, så vender jeg tilbage snarest.</p>
    </div>
    <form class="contact-form" name="contact" netlify action="/kontakt/success">
      <div>
        <p>Hvad er dit navn?</p>
        <input type="text" name="name" placeholder="fx. George Harrison" required />
      </div>
      <div>
        <p>Hvad er din email?</p>
        <input type="email" name="email" placeholder="fx. george@fabfour.com" required />
      </div>
      <div>
        <p>Hvad vil du gerne sige?</p>
        <textarea type="text" name="message" required />
      </div>
      <button class="send-button" type="submit">Send besked</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPostcard: false
    };
  }
};
</script>