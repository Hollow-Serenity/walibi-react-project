import React from "react";
import TicketForm from "./TicketForm";

const NewTicket = () => {
  const saveTicketDataHandler = (enteredTicketData) => {
    const ticketData = {
      ...enteredTicketData,
      id: Math.random().toString(),
    };
    console.log(ticketData);
  };

  const addTicketHandler = (ticket) => {
    console.log("Somewhere");
    console.log(ticket);
  };

  return (
    <div className="new-expense">
      <TicketForm
        onSaveTicketData={saveTicketDataHandler}
        pickUpTicketData={addTicketHandler}
      />
    </div>
  );
};

export default NewTicket;
