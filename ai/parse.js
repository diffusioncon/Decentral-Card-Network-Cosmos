const seedables = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
]
const vocabular = [' ', '!', '#', '&', "'", '(', ')', ',', '-', '.', '/', '0', '1',
  '4', '6', '9', ':', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z', '®', 'à', 'á', 'â', 'é', 'í', 'ö', 'ú',
  'û'
]

function randomSeedCharacter() {
  return seedables[Math.floor(Math.random() * seedables.length)]
}

function indexInVocabular(char) {
  return vocabular.indexOf(char)
}

function charForPrediction(prediction) {
  let currentMax = Number.MIN_SAFE_INTEGER
  let maxIndex = -1

  prediction.forEach((value, index) => {
    if (value > currentMax) {
      currentMax = value
      maxIndex = index
    }
  })

  return vocabular[maxIndex]
}

function predict(source) {
  return new Promise((resolve, reject) => {
    // add the actual axios request here
    // curl -d '{"instances": [[1,2,3]]}' -X OPTIONS http://localhost:81/v1/models/goat_herd:predict -I
    resolve(source + randomSeedCharacter())
  })
}

async function createName(maxLength) {
  const initialCharacter = randomSeedCharacter()
  let name = initialCharacter

  while (name.length < maxLength) {
    name = await predict(name)
  }

  return name
}

createName(8 + Math.round(Math.random() * 12))
