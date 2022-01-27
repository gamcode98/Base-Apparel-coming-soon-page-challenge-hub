const d = document;
export default function contactFormValidations() {
  const $form = d.querySelector("form");
  const $input = d.querySelector("form [required]");

  const $span = d.createElement("span");
  const $div = d.createElement("div");
  $div.id = $input.name;
  $div.textContent = $input.title;
  $div.classList.add("email-form-error", "none");
  $span.classList.add("icon-error", "none");
  $span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fill-rule="evenodd">
            <circle cx="12" cy="12" r="12" fill="#F96464" />
            <path fill="#FFF" fill-rule="nonzero"
              d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z" />
          </g>
        </svg>`;
  $input.insertAdjacentElement("afterend", $span);
  $input.insertAdjacentElement("afterend", $div);

  // d.getElementById($input.name).classList.add("is-active"),
  //   $span.classList.add("is-active");

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("form [required]")) {
      let $input = e.target;
      let pattern = $input.pattern;
      let $span = d.querySelector("form span");

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? (d.getElementById($input.name).classList.add("is-active"),
            $span.classList.add("is-active"))
          : (d.getElementById($input.name).classList.remove("is-active"),
            $span.classList.remove("is-active"));
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault;
  });
}
