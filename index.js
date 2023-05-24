function toggleReply(replyId) {
  var reply = document.getElementById(replyId)
  if (reply.style.display === 'none') {
    reply.style.display = 'block'
  } else {
    reply.style.display = 'none'
  }
}
