//Key-Value pairing of names to venmo tags
const TAGS = {
             };

function resolveTagForName(aName) {
  return TAGS[aName.trim().toLowerCase()];
}