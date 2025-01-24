state = (0, 0)
states = set()
states.add(state)
queue = [(state, [])]
while queue:
    state, steps = queue.pop(0)
    x, y = state
    if y == 4:
        print("Solution found!")
        for step in steps:
            print(step)
        print()
        continue
    moves = [("Fill 3 gallon bucket", (3, y)), 
             ("Fill 5 gallon bucket", (x, 5)),
             ("Empty 3 gallon bucket", (0, y)),
             ("Empty 5 gallon bucket", (x, 0)),
             ("Pour 3 gallon bucket into 5 gallon bucket", (max(0, x-(5-y)), min(5, x+y))),
             ("Pour 5 gallon bucket into 3 gallon bucket", (min(3, x+y), max(0, y-(3-x))))]
    for move in moves:
        step, newState = move
        if newState not in states:
            states.add(newState)
            queue.append((newState, steps + [step]))
