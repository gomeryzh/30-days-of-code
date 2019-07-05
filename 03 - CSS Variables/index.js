const controlls = document.querySelectorAll('.controls input');

function handleInputUpdate() {
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix,
  );
}

controlls.forEach(input =>
  input.addEventListener('mousemove', handleInputUpdate),
);
controlls.forEach(input => input.addEventListener('change', handleInputUpdate));
