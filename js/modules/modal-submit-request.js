import { modal as submitRequestModal } from "./components/modal.js"

export default function modalSubmitRequest() {
  const modalOpen = document.querySelector("[data-modal-open]")
  const modalRequest = document.querySelector("[data-modal-request]")
  const modalClose = document.querySelector("[data-modal-close]")

  submitRequestModal(modalOpen, modalRequest, modalClose)
}
