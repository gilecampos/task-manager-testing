import { Task } from './task.js'
import { Modal } from './modal.js'

const modalMobile = document.querySelector("[data-js='modal-mobile']")
const buttonToggleModal = document.querySelector("[data-js='toggle-modal-button']")
const buttonCloseModal = document.querySelector("[data-js='close-modal-button']")

buttonToggleModal.addEventListener('click', (e) => {
  Modal.Toggle(modalMobile)
})

buttonCloseModal.addEventListener('click', (e) => {
  Modal.Toggle(modalMobile)
})