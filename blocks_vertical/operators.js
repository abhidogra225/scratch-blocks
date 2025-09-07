Blockly.Blocks['operator_square'] = {
  init: function () {
    this.jsonInit({
      "message0": "square %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_squareroot'] = {
  init: function () {
    this.jsonInit({
      "message0": "square root %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};
