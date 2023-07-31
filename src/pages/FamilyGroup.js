import Button from "../components/Button";

function FamilyGroup({ contract, setErrorMessage }) {
  /**
   * Add a child to the contract.
   * @param event - Event that triggered the function.
   */
  const addChild = (event) => {
    event.preventDefault();
    setErrorMessage(null);

    // Call the `addChild` function on the contract.
    contract
      .addChild("0x90F79bf6EB2c4f870365E785982E1f101E93b906", "Child 1")
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // Return FamilyGroup component.
  return (
    <>
      <h1 className="text-3xl font-bold">Family Group</h1>
      <Button onClick={addChild}>Add Child</Button>
    </>
  );
}

export default FamilyGroup;
