const blockHolder = document.querySelector(".blocks");

class Block {
  constructor(blockElement) {
    this.blockElementProperty = blockElement;

    this.blockElementProperty.addEventListener(
      "click",
      this.moveToTop.bind(this)
    );
  }

  moveToTop() {
    blockHolder.insertBefore(this.blockElementProperty, blocks[0]);
    this.reorderBlocks();
  }

  reorderBlocks() {
    blocks = document.querySelectorAll(".block");
  }
}

let blocks = document.querySelectorAll(".block");

blocks.forEach(blockElement => {
  return new Block(blockElement);
});
