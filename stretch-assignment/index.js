const blockHolder = document.querySelector(".blocks");

class Block {
  constructor(blockElement) {
    this.blockElementProperty = blockElement;
    this.amountMoved = 0;

    this.blockElementProperty.addEventListener(
      "click",
      this.moveToTop.bind(this)
    );

    this.blockElementProperty.addEventListener(
      "mousedown",
      this.moveRight.bind(this)
    );
  }

  moveToTop() {
    blockHolder.insertBefore(this.blockElementProperty, blocks[0]);
    this.reorderBlocks();
  }

  reorderBlocks() {
    blocks = document.querySelectorAll(".block");
  }

  moveRight() {
    console.log("holding");

    window.setInterval(this.move.bind(this), 3000);
  }

  move() {
    console.log("moving");
    this.amountMoved += 5;
    console.log(this.amountMoved);
    this.blockElementProperty.style.right = `${this.amountMoved}px`;
  }
}

let blocks = document.querySelectorAll(".block");

blocks.forEach(blockElement => {
  return new Block(blockElement);
});
