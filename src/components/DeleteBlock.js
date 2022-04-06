const DeleteBlock = () => {

  const deleteTicket = () => {
    console.log('Deleted');
  }

  return (
    <div className="delete-block">
      <div className="delete-item" onClick={deleteTicket}>x</div>
    </div>
  )
}

export default DeleteBlock;