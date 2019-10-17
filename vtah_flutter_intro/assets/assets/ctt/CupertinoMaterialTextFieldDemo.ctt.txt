import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class TextFieldDemo extends StatefulWidget {
  const TextFieldDemo({this.isIOS = false, @required this.placeholder});

  final bool isIOS;
  final String placeholder;

  @override
  _TextFieldDemoState createState() => _TextFieldDemoState();
}

class _TextFieldDemoState extends State<TextFieldDemo> {
  @override
  Widget build(BuildContext context) {
    return _buildTextField(widget.isIOS, widget.placeholder);
  }

  _buildTextField(bool isIOS, String placeholder) => isIOS
      ? CupertinoTextField(
          obscureText: true,
          keyboardType: TextInputType.visiblePassword,
          placeholder: placeholder,
        )
      : TextFormField(
          obscureText: true,
          keyboardType: TextInputType.visiblePassword,
          decoration: InputDecoration(hintText: placeholder),
        );
}

class CupertinoMaterialTextFieldDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: 300,
        height: 300,
        child: Wrap(direction: Axis.horizontal, spacing: 32, children: <Widget>[
          TextFieldDemo(isIOS: true, placeholder: 'Password'),
          TextFieldDemo(
            placeholder: 'password',
          )
        ]));
  }
}
