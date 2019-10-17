import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class GridViewDemo extends StatefulWidget {
  const GridViewDemo({@required this.size});

  final int size;

  @override
  _GridViewDemoState createState() => _GridViewDemoState();
}

class _GridViewDemoState extends State<GridViewDemo> {
  List<String> items;

  @override
  void initState() {
    super.initState();
    items = _generateList(widget.size);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        width: 300,
        height: 300,
        decoration: BoxDecoration(
            border: Border.all(color: Colors.deepPurple, width: 1.0)),
        child: Scrollbar(
            child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                children: items
                    .map((item) => Container(
                        decoration: BoxDecoration(
                            border: Border.all(color: Colors.red, width: 1.0)),
                        alignment: Alignment.center,
                        child: Text(item)))
                    .toList())));
  }

  _generateList(int size) =>
      List.generate(size, (position) => "Element $position");
}
