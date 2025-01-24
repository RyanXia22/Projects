dictionary = open("dictionary.txt", "r")
wordList = []
for line in dictionary:
    wordList.append(line.strip().lower())
tabind = set("tabind")
for word in wordList:
    if len(set(word)) == len(word) and set(word) <= tabind:
        print(word)
