# Welcome to ZykovAlgebraLibrary 🌐

Greetings, curious coder! Dive into the realm of graph theory with the `zykovEngine` - a sophisticated JavaScript library designed to craft, manipulate, and visualize graph structures using algebraic operations. 

## About zykovEngine

The `zykovEngine` is inspired by A. A. Zykov's fascinating algebraic approach to graph theory. With the modern elegance of JavaScript, this library breathes life into graph expressions, offering an intuitive way to interact with and visualize them.

### Features:
- 🚀 **Simple Operations**: Effortlessly perform graph algebraic operations like addition and multiplication.
- 📊 **Visualization**: Witness the beauty of your algebraic graph expressions brought to life.
- 💡 **Intuitive Parsing**: Translate human-friendly graph expressions into machine-understandable structures.
  
### Use Cases:
Whether you're a mathematician trying to visualize complex graph structures or a developer wanting to integrate algebraic graph operations into your app, `zykovEngine` is your key to unlock the rich world of graph algebra.

## Getting Started

1. Dive into our [documentation](#Graph-Visualization-Tool) to explore the capabilities of the `zykovEngine`.
2. Run the [live demo](https://stackblitz.com/edit/web-platform-cxi1fv?embed=1&file=index.html&hideExplorer=1&hideNavigation=1&view=preview) to witness the magic in action.
3. Clone, star, or fork the repository from [here](https://github.com/Anekemuthep/ZykovAlgebraLibrary/tree/main) to embark on your graph algebra journey.

---

Feel the algebraic pulse of graphs with `zykovEngine`. **Happy graphing!**

---

# Graph Visualization Tool 

This tool allows users to visualize graphs in a unique and concise manner. Using numbers as vertex representations, we define two primary operations: addition and multiplication.

## Vertex Representation

Each number `n` represents a unique vertex. For instance:
- `1` is a vertex
- `2` is another vertex
... and so on.

## Operations

### Addition (`+`)

The addition of two numbers (or vertex representations) `a + b` indicates that vertices `a` and `b` are independent and have no edges connecting them.

### Multiplication (`*`)

The multiplication of two numbers `a * b` signifies that there's an edge between vertices `a` and `b`.

## Example

Consider the graph representation: 

`G = 1*2 + 1*3 + 1*4 + 1*5 + 2*3 + 2*4 + 2*5 + 3*4 + 3*5 + 4*5 + 5*6 + 5*7 + 6*7`

Here, 
- There's an edge between vertices 1 and 2 (`1*2`), vertices 1 and 3 (`1*3`), and so on.
- Vertices 5 and 6 (`5*6`), and vertices 5 and 7 (`5*7`) are connected.
- Similarly, vertices 6 and 7 (`6*7`) have an edge between them.

## Visualization

Once you input this graph representation into the tool, it will visualize the graph showing all the vertices and the connections (edges) between them.
