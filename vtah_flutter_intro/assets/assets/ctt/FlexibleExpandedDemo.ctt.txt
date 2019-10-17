import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class FlexibleExpandedDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        height: 300,
        width: 100,
        decoration: BoxDecoration(
            border: Border.all(color: Colors.deepPurple, width: 1.0)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            Container(
              width: 32,
              height: 32,
              color: Colors.red,
            ),
            Expanded(
              child: Container(
                width: 64, // Ignoré
                height: 64, // Ignoré
                color: Colors.blue,
              ),
            ),
            Flexible(
              fit: FlexFit.loose, // Respecte la taille
              child: Container(
                width: 16,
                height: 16,
                color: Colors.green,
              ),
            ),
            Flexible(
              flex: 2,
              fit: FlexFit.tight,
              child: Container(
                width: 64, // Ignoré
                height: 64, // Ignoré
                color: Colors.orange,
              ),
            )
          ],
        ));
  }
}
