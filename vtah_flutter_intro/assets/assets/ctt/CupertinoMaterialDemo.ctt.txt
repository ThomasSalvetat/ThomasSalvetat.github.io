import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SwitchDemo extends StatefulWidget {
  const SwitchDemo({this.isIOS = false});

  final bool isIOS;

  @override
  _SwitchDemoState createState() => _SwitchDemoState();
}

class _SwitchDemoState extends State<SwitchDemo> {
  bool _lights = false;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text('Lights'),
      trailing: _buildSwitch(widget.isIOS),
      onTap: () {
        setState(() {
          _lights = !_lights;
        });
      },
    );
  }

  _buildSwitch(bool isIOS) => isIOS
      ? CupertinoSwitch(
          value: _lights,
          onChanged: _onChanged,
        )
      : Switch(
          value: _lights,
          onChanged: _onChanged,
        );

  _onChanged(bool value) => setState(() {
        _lights = value;
      });
}

class CupertinoMaterialDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: 300,
        height: 300,
        child: Wrap(
            direction: Axis.horizontal,
            spacing: 32,
            children: <Widget>[SwitchDemo(isIOS: true), SwitchDemo()]));
  }
}
