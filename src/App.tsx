import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly'
import './App.css'
import { DEFAULT_TOOLBOX } from './defaultToolbox';

function App() {

  Blockly.Blocks['lights_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn off the lights");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['lights_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn on the light");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(105);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['switch'] = {
    init: function() {
      this.appendValueInput("checkSwitch")
          .setCheck("Boolean")
          .appendField("Switch");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  

  const initialXml =
    `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="text" x="70" y="30">
        <field name="TEXT">
      </field>
      </block>
    </xml>
    `;

  

  return (
    <div className="App">
      <h1>Blockly Starter Code</h1>
      <BlocklyWorkspace
      className="fill-height"
      initialXml={initialXml}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
      }}
      toolboxConfiguration={DEFAULT_TOOLBOX}
    />
    </div>
  )
}

export default App
