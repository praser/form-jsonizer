const html = `
<body>
  <form action="#" id="myForm">
    <input type="checkbox" name="checkbox" value="checkbox" checked disabled>
    <input type="color" name="color" value="#FF0000" disabled>
    <input type="date" name="date" value="2017-11-24" disabled>
    <input type="datetime" name="datetime" value="2017-11-24T04:30" disabled>
    <input type="datetime-local" name="datetime-local" value="2017-11-24T04:30" disabled>
    <input type="email" name="email" value="jonhdoe@email.com">
    <input type="file" name="file">
    <input type="hidden" name="hidden" value="hidden">
    <input type="image" src="image" alt="image input">
    <input type="month" name="month" value="2017-11">
    <input type="number" name="number" value="12345">
    <input type="password" name="password" value="password">
    <input type="radio" name="radio" value="radio" checked>
    <input type="radio" name="radio" value="radio2">
    <input type="range" name="range" value="35">
    <input type="search" name="search" value="search">
    <input type="tel" name="tel" value="(61)99304-1307">
    <input type="text" name="text" value="text">
    <input type="time" name="time" value="04:30">
    <input type="url" name="url" value="http://www.google.com">
    <input type="week" name="week" value="2017-W47">
    <input type="reset" value="reset">
    <input type="button" value="button">
    <input type="submit" value="">
    <textarea name="textarea" cols="30" rows="10">textarea</textarea>
    <select name="select">
      <option value="select" selected>select</option>
    </select>
  </form>
</body>`;

module.exports = html;