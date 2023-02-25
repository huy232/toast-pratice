const toast = ({
	title = "",
	message = "",
	type = "info",
	duration = 3000,
}) => {
	const toastElement = document.getElementById("toast")
	if (toastElement) {
		const createToast = document.createElement("div")
		// Remove toast when meet duration
		const autoRemoveId = setTimeout(() => {
			toastElement.removeChild(createToast)
		}, duration + 1000)
		// Handle onclick close toast manually
		createToast.onclick = (e) => {
			if (e.target.closest(".toast__close")) {
				toastElement.removeChild(createToast)
				clearTimeout(autoRemoveId)
			}
		}

		const icons = {
			success: "fas fa-check-circle",
			info: "fas fa-info-circle",
			warning: "fas fa-exclamation-circle",
			error: "fas fa-exclamation-circle",
		}
		const icon = icons[type]
		const delay = (duration / 1000).toFixed(2)
		createToast.classList.add("toast", `toast--${type}`)
		createToast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
		createToast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
        `
		toastElement.appendChild(createToast)
	}
}

function showSuccessToast() {
	toast({
		title: "Thành công!",
		message: "Bạn đã đăng ký thành công tài khoản tại F8.",
		type: "success",
		duration: 5000,
	})
}

function showErrorToast() {
	toast({
		title: "Thất bại!",
		message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
		type: "error",
		duration: 5000,
	})
}
