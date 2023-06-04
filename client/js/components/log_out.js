function logOut() {
  fetch('/api/sessions', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json', 'Clear-Site-Data': '"*"' }
  })
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      state.loggedInUser = null

    logoutBtn.classList.add('hidden');
    
    reloadPage()
      
      renderLogin()
    } else {
    renderError(res.error)
    }
})
}
