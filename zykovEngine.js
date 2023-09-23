class Graph {
    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }
  
    add(other) {
        let vertices = Array.from(new Set(this.vertices.concat(other.vertices)));
        let edges = Array.from(new Set(this.edges.concat(other.edges)));
        return new Graph(vertices, edges);
    }
  
    multiply(other) {
        let vertices = Array.from(new Set(this.vertices.concat(other.vertices)));
        let edges = Array.from(new Set(this.edges.concat(other.edges)));
        for (let u of this.vertices) {
            for (let v of other.vertices) {
                if (u !== v) {
                    edges.push([u, v]);
                }
            }
        }
        return new Graph(vertices, edges);
    }
  }
  
  function v(i) {
    return new Graph([i], []);
  }
  
  function parseGraph(expression) {
    let tokens = tokenize(expression);
    return parseExpression(tokens);
  }
  
  function tokenize(expression) {
    let tokens = [];
    let currentToken = "";
    for (let char of expression) {
        if ([" ", "\t", "\n"].includes(char)) {
            continue;
        }
        if (["*", "+", "(", ")"].includes(char)) {
            if (currentToken) {
                tokens.push(currentToken);
                currentToken = "";
            }
            tokens.push(char);
        } else {
            currentToken += char;
        }
    }
    if (currentToken) {
        tokens.push(currentToken);
    }
    return tokens;
  }
  
  function parseExpression(tokens) {
    let graph = parseTerm(tokens);
    while (tokens.length > 0 && tokens[0] === "+") {
        tokens.shift();
        graph = graph.add(parseTerm(tokens));
    }
    return graph;
  }
  
  function parseTerm(tokens) {
    let graph = parseFactor(tokens);
    while (tokens.length > 0 && tokens[0] === "*") {
        tokens.shift();
        graph = graph.multiply(parseFactor(tokens));
    }
    return graph;
  }
  
  function parseFactor(tokens) {
    if (tokens[0] === "(") {
        tokens.shift();
        let graph = parseExpression(tokens);
        if (tokens[0] !== ")") {
            throw new Error("Invalid expression: missing closing parenthesis");
        }
        tokens.shift();
        return graph;
    } else {
        let vertex = parseInt(tokens.shift());
        return v(vertex);
    }
  }
  
  function drawGraph() {
    // Clear the container
    document.getElementById('container').innerHTML = '';
  
    let expression = document.getElementById('expression').value;
    let graph = parseGraph(expression);
  
    // Calculate the coordinates for each node to distribute them in a circle
    let numNodes = graph.vertices.length;
    let angle = (2 * Math.PI) / numNodes;
  
    let s = new sigma({
        graph: {
            nodes: graph.vertices.map((v, i) => ({
                id: 'n' + v,
                label: 'v ' + v,
                x: Math.cos(i * angle),
                y: Math.sin(i * angle),
                size: 1,
                color: '#666'
            })),
            edges: graph.edges.map((e, i) => ({
                id: 'e' + i,
                source: 'n' + e[0],
                target: 'n' + e[1],
                size: 1,
                color: '#ccc'
            }))
        },
        container: 'container',
        settings: {
            labelThreshold: 0
        }
    });
  
    // Center and scale the graph
    let cam = s.cameras[0];
    let ratio = (0.07 * numNodes + Math.sqrt(numNodes)) / Math.sqrt(numNodes);
    cam.goTo({
        x: 0,
        y: 0,
        angle: 0,
        ratio: ratio
    });
  
    // Update label size
    s.bind('cameraUpdated', function(e) {
        s.settings('defaultLabelSize', ratio / e.target.ratio);
        s.refresh({ skipIndexation: true });
    });
  
    s.refresh();
  }