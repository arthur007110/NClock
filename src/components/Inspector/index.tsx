import { Button } from "../Button";
import Input from "../Input";
import { InspectorPanel, ButtonsContainer, CreateTaskContainer } from "./styles";

export default function Inspector() {
  
  return(
    <InspectorPanel>
      <CreateTaskContainer>
        <Input placeholder="TaskName"></Input>
        <ButtonsContainer>
          <Button>Create</Button>
          <Button>Create and start</Button>
        </ButtonsContainer>
      </CreateTaskContainer>
    </InspectorPanel>
  );
}