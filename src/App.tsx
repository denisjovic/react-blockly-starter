import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly'
import './App.css'

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
          .appendField("turn on the light");
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
        CHANGE ME!
      </field>
      </block>
    </xml>
    `;

  type CustomToolboxCategory = 'VARIABLE' | 'PROCEDURE'
  
  interface ToolboxBlock {
    type: string,
    colour?: string,
    shadow?: string,
  }

  interface ToolboxCategories  {
    name: string,
    custom?: CustomToolboxCategory,
    blocks: ToolboxBlock[]


  }
  const TOOLBOX_CATEGORIES: any = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "lights_off",
      },
      {
        "kind": "block",
        "type": "lights_on",
      },
      {
        "kind": "block",
        "type": "switch",
      }
    ]

    
  }

  return (
    <div className="App">
      <h1>Blockly</h1>
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
      toolboxConfiguration={TOOLBOX_CATEGORIES}
    />
    </div>
  )
}

export default App
