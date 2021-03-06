import { IGuiWindowRegion } from "../../Interfaces/IGuiWindowRegion";

/** An implementation of `IGuiWindowRegion` that describes a circular region of the viewport */
export class CircleGuiWindowRegion implements IGuiWindowRegion {
	private readonly centerPoint: Vector2;
	private readonly radiusInPixels: number;

	/**
	 * Creates a new instance
	 * @param centerPoint A `Vector2` describing the center point in the viewport of the region
	 * @param radiusInPixels A `number` describing the radius in pixels of the region
	 */
	public constructor(centerPoint: Vector2, radiusInPixels: number) {
		this.centerPoint = centerPoint;
		this.radiusInPixels = radiusInPixels;
	}

	public isPointInRegion(point: Vector2) {
		const displacement = this.centerPoint.sub(point);
		const isWithinRadius = displacement.Magnitude <= this.radiusInPixels;

		return isWithinRadius;
	}
}
