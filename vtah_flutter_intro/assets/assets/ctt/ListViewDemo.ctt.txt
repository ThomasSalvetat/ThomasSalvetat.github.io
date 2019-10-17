import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ListViewDemo extends StatefulWidget {
  const ListViewDemo({@required this.size});

  final int size;

  @override
  _ListViewDemoState createState() => _ListViewDemoState();
}

class _ListViewDemoState extends State<ListViewDemo> {
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
            child: ListView.builder(
          itemCount: widget.size,
          itemBuilder: (context, position) => Text(items[position]),
        )));
  }

  _generateList(int size) =>
      List.generate(size, (position) => "Element $position");
}
