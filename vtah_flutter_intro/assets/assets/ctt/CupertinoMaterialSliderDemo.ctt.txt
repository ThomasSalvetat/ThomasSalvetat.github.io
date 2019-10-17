import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class CupertinoMaterialSliderDemo extends StatefulWidget {
  @override
  _CupertinoMaterialSliderDemoState createState() =>
      _CupertinoMaterialSliderDemoState();
}

class _CupertinoMaterialSliderDemoState
    extends State<CupertinoMaterialSliderDemo> {
  double _value = 5.0;

  @override
  Widget build(BuildContext context) {
    return Container(
        width: 500,
        height: 300,
        child: Column(children: [
          Text(_value.truncate().toString()),
          _showSlider(context, true, "Slider", _value, 0, 99),
          _showSlider(context, false, "Slider", _value, 0, 99),
        ]));
  }

  Widget _showSlider(BuildContext context, bool isIOS, String label,
      double value, double min, double max) {
    return isIOS
        ? _showSliderCupertino(context, label, value, min, max)
        : _showSliderMaterial(context, label, value, min, max);
  }

  Widget _showSliderCupertino(BuildContext context, String label, double value,
      double min, double max) {
    return CupertinoSlider(
      onChanged: (value) => setState(() => _value = value),
      value: value,
      min: min,
      max: max,
    );
  }

  Widget _showSliderMaterial(BuildContext context, String label, double value,
      double min, double max) {
    return Slider(
      label: label,
      onChanged: (value) => setState(() => _value = value),
      value: value,
      min: min,
      max: max,
    );
  }
}
